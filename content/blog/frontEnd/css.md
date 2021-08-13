---
title: CSS 성능 향상 시키기
date: 2021-08-11 16:12:04
category: frontEnd
thumbnail: './image/'
draft: false
---

참고 링크 : https://yceffort.kr/2021/03/improve-css-performance

- 개발을 진행하다보면, 페이지 성능에 대해 고민할 때가 있다. 이 포스트에서는 CSS 성능 향상을 위해 필요한 작업들에 대해 다뤄보려고 한다. 

# CSS 동작 방법

### CSS는 랜더링을 막을 수 있다. 

CSS의 존재 자체 만으로, CSS가 파싱되기 전까지 브라우저는 랜더링이 지연된다. 

### CSS는 HTML 파싱을 막을 수도 있다. 

브라우저가 CSS가 파싱되기 전까지 콘텐츠를 보여주지 않더라도, HTML의 로딩된 부분만을 일단 보여줄 수도 있다. 그러나 스크립트의 경우 `async` `defer` 이 없다면 파싱을 막게 된다. 스크립트는 잠재적으로 페이지를 조작할 여지가 있기 때문에 브라우저는 스크립트 실행에 매우 주의를 기울일 필요가 있다.

스크립트가 페이지에 많은 영향을 주기 때문에, 만약 브라우저가 CSS 관련 작업을 진행중이라면, 이 작업이 완료될 때까지 기다렸다가 스크립트를 실행할 것이다. 스크립트가 실행되기 전까지 문서 파싱을 할 수 없기 때문에 CSS는 더이상 렌더링을 차단하는 요소로 작용하지 않는다. 문서의 외부 스타일시투 및 스크립트 순서에 따라서 때로는 HTML 파싱도 중지할 수 있다. 

파싱을 차단하는 상황을 피하기 위해서는 CSS를 최대한 빨리 불러와야 하고, 리소스를 최적의 순서로 불러와야 한다. 

# CSS 사이즈 지켜보기

### CSS 압축하고 최소화 하기

외부 스타일 시트를 다운로드 하는 작업은 필연적으로 네트워크 지연이 발생하지만, 네트워크에 전송되는 바이트의 양을 줄임으로써 이 과정을 최소화 할 수 있다. 

파일을 압축하는 것은 속도 향상에 지대한 영향을 미치면, 많은 호스팅 플랫폼과 CDN에서는 기본적으로 애셋을 압축해준다. 가장 널리알려져 있는 압축 솔루션은 GZip 이고, Brotil또한 존재하지만, Brotil는 일부 브라우저에서 지원을 하지 않는다. 

Minification(최소화) 과정은 코드에서 필요없는 공백을 지우는 과정이다. 결과물은 이전 코드에 비해서 작아지지만, 브라우저는 충분히 코드를 파싱할 수 있으며 이를 통해 몇 바이트라도 더 절약할 수 있다. 가장 유명한 자바스크립트 압축 툴로 terser이 있고, 웹팩 v4버전 이상 부터는 빌드 파일을 작게하는 도구가 내장되어 있다. 

### 사용하지 않는 CSS 제거

CSS 프레임워크를 사용하게 될 경우, 필요한 컴포넌트만 번들링 하지 않는 이상 사용되지 않는 CSS가 포함 되는 것은 일반적인 문제다. 이와 비슷하게, 오랜시간에 걸쳐서 쌓이는 큰 코드 베이스에도 안쓰는 CSS가 남는 경우가 더러 있다. 

사용하지 않는 CSS를 제거하는 것은 수동 작업이다. 따라서 코드의 복작도에 따라 난이도가 증가하게 된다. 

** 결론은 CSS를 자바스크립트 내부에 포함시켜 버리면 CSS 파싱과 평가가 느려진다는 것이다. **

# CSS 우선순위 정하기 

Critical CSS란 화면에 보이는 컨텐츠의 CSS에 대해서면 inline 처리하는 것을 의미한다. HTML 문서의 `<head/>` 에 있는 스타일을 따로 추출해서 인라이딩 하면 스타일을 가져오는 추가 요청을 할 필요가 없어져 랜더링이 빨라진다. 

첫 렌더링 시의 라운드트림을 하기 위해서는, above-the-fold content의 크기를 14Kb내로 유지해야 한다. (압축시)

Critical CSS를 정확히 정의하는 것은 어렵다. 디바이스의 크기에 따라서 사용자가 보이는 영역이 달라지기 때문이다. 이는 특히 매우 유동적인 사이트의 경우에는 더욱 어려워진다. 그러나 이는 여전이 성능 향상에 중요한 부분 이므로, Critical CriticalCSS penthouse 등의 도구를 활용해서 자동화 할 필요가 있다. 

### CSS 비동기로 불러오기

위 above-the-fold content를 최대한 빠르게 불러오는데 집중했다면, 나머지 영역은 비동기로 로딩하는 것이 최선이다. 
 - <link .../> 사용

`print` 미디어 타입이란, 사용자가 페이지를 프린트를 하려고 하는 경우에만, 브라우저가 해당 스타일 시트를 불러오는 것으로 랜더링에는 영향을 미치지 않는다. 그리고 여기에 `onload` 이벤트로 `this.media='all'` 을 추가한다면, 스타일 시트가 로드가 완료되면 미디어 속성을 다시 `all`로 바꾸면서 스타일 시트가 적용된다. 

### @import 사용 자제하기

`@import` 는 CSS 파일의 렌더링 속도를 느리게 한다. 특히 `@import url(imported.css)` 와 같은 코드는 네트워크 흐름을 아래와 같이 바꿔버린다. 