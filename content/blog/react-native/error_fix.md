---
title: react-native-1
date: 2021-04-09 16:12:04
category: react-native
thumbnail: './image/'
draft: false
---

- 이 포스팅은 `switi`앱을 개발하면서 배운 지식들을 정리하고 공유하기 위해 쓰는 글입니다.
- react-native와 typescript를 사용했습니다.

<개발 Tip>

- image 삽입

  - 전역으로 imag폴더 만든 후 `import`하여 이미지 사용합니다.
    이유 : 공통 사용 이미지를 두번 중복하여 저장하지 않음으로 메모리 공간이 늘어납니다.

  `예시.tsx`

  ```typescript
  import switi6 from './image/6switi.png'
  ```

- 코드 작성

  - 한 파일에 코드가 100줄 이상이 되지 않도록 작성합니다. (더 엄격하게 하는 사람도 많다. )
    예 : 컴포넌트 활용

- 오류 해결

  - useState사용 시 initial value로 사진 파일을 넣으면 오류가 날 수 있다. 이때, 깃허브 이미지 주소를 넣으면 오류를 해결할 수 있다. 그러나 로딩 시간이 길어져 딜레이가 발생할 수 있다.
    -> 해결방법? 미정

  `예시.tsx`

  ```typescript
  import React, { useState, useEffect } from 'react';
  import { Platform } from 'react-native';
  import * as ImagePicker from 'expo-image-picker';
  import styled from 'styled-components/native';
  import CameraIcon from './camera.png';

  const ImagePickerContainer = () => {
      const [image, setImage] = useState(
          'https://github.com/purplecode-team/switi_app/blob/feature/mypage/Screen/MyPage_FixUserInfo/image/profile.png?raw=true'
      );

  ...

  };
  ```

- imagePicker

  - 사용자의 갤러리에서 사진을 가져와야 할 때 사용합니다.
    예 : 프로필 사진 설정

  - 기본 이미지에서 불러온 이미지로 대체 할 때:
    기존 : 조건연산자를 써서 태그로 나타냈다. image는 useState로 두고 image가 falsy하면 기본이미지를, 반대이면 불러온 이미지를 사용했다.
    컨펌내용 : image를 useState로 사용한 것은 같으나 initial value에 기본이미지를 두어 태그 하나만 사용했다.

  `컨펌 예시.tsx`

  ```typescript
  <PictureContainer onPress={pickImage} activeOpacity={0.8}>
    <UserImage
      source={{
        uri: image,
      }}
    />
    <CameraImage source={CameraIcon} />
  </PictureContainer>
  ```

- modal 창

  - 디자인 요구 조건 : modal창에서 특정 버튼을 누르면 그 다음 모달창이 뜨도록 개발
    기존 : useState와 버튼 onPress함수를 만들어 set상태 함수를 사용하며 다음 모달창으로 이동합니다.  
    오류내용 : 갑자기 두번째 모달창이 뜨지 않음.. 원인은 정확하게 알 수 없으나 화면의 다른 버튼도 안 눌러지는 것으로 보아 다른 모달창이 뜨기는 했는데 보이지 않는 것 같기도 함
    해결 : setTime 함수를 사용하여 보여주었다.
    -> 약간의 딜레이가 발생한다. 해결방안? 미정
    `예시.tsx`

  ```typescript
    import React, { useState } from 'react';

    ...

    const UserInfo = () => {

        ...

        const [modalVisible, setModalVisible] = useState<boolean>(false);
        const [configModalVisible, setConfigModalVisible] = useState<boolean>(false);

        const onPressLogout = () => setModalVisible(true);
        const closeModal = () => {
            setModalVisible(false);
            setConfigModalVisible(false);
        };

        const onPressCancel = () => setModalVisible(false);

        const onPressRealLogout = () => {
            setModalVisible(false);
            setTimeout(() => {
            setConfigModalVisible(true);
        }, 500);
    };
  ```

- 사용자 함수 만들기

  - number의 input하나를 받으면 조건에 따라 number output하나를 return 하는 함수를 만들었는데 타입 지정에서 에러가 났습니다.
    기존 : interface를 이용한 함수 input의 타입지정
    컨펌 내용 : interface 없이 input변수명 : number을 이용했다.
