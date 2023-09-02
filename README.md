# 멤버 관리 시스템 🫂

## 배포 주소

🔗 https://64df1d90ef7d331ac7e22890--profound-paletas-1a9d0b.netlify.app/

## 프로젝트 소개

- **C**reate

  ![create](https://github.com/noSPkeepgoing/TIL/assets/125979833/c062050b-f2f3-442c-917b-a866730fb47a)

  - 유저의 이미지, 이름, 핸드폰 번호, 이메일, 부서 등을 지정 가능
  - 사진을 제외한 모든 정보는 필수 정보로 입력하지 않을 시 경고 `alert`을 보임
  - 핸드폰 번호는 하이픈이 없는 경우 자동으로 삽입하여 저장
  - 핸드폰 번호와 이메일은 정규식을 이용해 형식에 올바르지 않는다면 경고 `alert`을 보임

- **R**ead

  | 데이터가 없는 경우                                                                                                                                                 | 데이터가 있는 경우                                                                                  |
  | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
  | <img width="1469" alt="스크린샷 2023-08-18 오후 5 23 32" src="https://github.com/noSPkeepgoing/TIL/assets/125979833/e28641d8-edf6-41d2-8283-3d78ce691373"> | ![read](https://github.com/noSPkeepgoing/TIL/assets/125979833/e9e6c810-02f2-4086-b7fe-56e2bc10dca9) |

  - 카드 형식으로 데이터를 보임
  - 카드 호버시 위치 변화와 그림자 변화 애니메이션을 통해 입체감 형성

- **U**pdate

  ![update](https://github.com/noSPkeepgoing/TIL/assets/125979833/f6a9b208-ad40-46b1-aaeb-031f18be0e82)

  - 카드 아이템 클릭 시 수정 가능한 모달창을 보임
  - 모달 속 저장 버튼을 누르면 데이터가 수정되고, 카드 리스트가 업데이트

- **D**elete

  ![delete](https://github.com/noSPkeepgoing/TIL/assets/125979833/09d0b35c-8caf-4746-a7bf-6ab4f9ac4929)

  - 카드 호버시 삭제 버튼을 보임
  - 삭제 클릭 시 데이터가 수정되고, 카드 리스트가 자동으로 업데이트

- dark mode 🌙

  ![dark](https://github.com/KDT1-FE/Y_FE_JAVASCRIPT_PICTURE/assets/125979833/8e48284f-cb89-48f1-b139-04bd0fa84780)

  - 상단의 토글 버튼을 누르면 light모드와 dark모드로 변경 가능

- 부서별로 보기

  ![category](https://github.com/KDT1-FE/Y_FE_JAVASCRIPT_PICTURE/assets/125979833/6a4e88ef-b8cf-4db9-bdfe-7c65e60bb036)

  - 드롭다운 형식으로 부서를 보이고 선택 시 해당 부서의 아이템만 보임

- 검색기능

  ![search](https://github.com/KDT1-FE/Y_FE_JAVASCRIPT_PICTURE/assets/125979833/7c2681e8-be10-4da4-adf0-fd421eef11e1)

  - 헤더의 돋보기 아이콘을 누르면 검색 `form`을 보임
  - `submit` 이벤트 발생 시 검색 결과를 보임
  - `localstorage`를 이용해서 사용자의 직전 검색을 기억

## 기술 스택

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">

<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white">
<img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white">
