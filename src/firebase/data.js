import config from './config.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js';
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
} from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js';
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js';

// 초기세팅
const {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
} = config;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// 데이터 읽어오기
const storage = getStorage();

export const setData = async () => {
  const data = [];
  const querySnapshot = await getDocs(collection(db, 'member'));
  querySnapshot.forEach((el) => {
    data.push({ data: el.data(), id: el.id });
  });
  return data;
};

// 데이터 부서별로 가져오기
export const filteredData = async (department) => {
  const data = [];
  const q = query(
    collection(db, 'member'),
    where('department', '==', department)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((el) => {
    data.push({ data: el.data(), id: el.id });
  });
  return data;
};

// 데이터 검색
export const searchData = async (keyword) => {
  const data = [];
  const q = query(
    collection(db, 'member'),
    where('name', '>=', keyword),
    where('name', '<=', keyword + '\uf8ff')
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((el) => {
    data.push({ data: el.data(), id: el.id });
  });
  return data;
};

// 이미지 업로드
export const uploadImage = (name, file, el) => {
  const storageRef = ref(storage, name);
  uploadBytes(storageRef, file)
    .then(() => {
      return getDownloadURL(storageRef);
    })
    .then((url) => {
      el.setAttribute('src', url);
    })
    .catch((error) => {
      console.error('Error uploading image:', error);
    });
};

// 데이터 추가
export const createData = async (info) => {
  const { name, email, phone, photo, department } = info;
  await setDoc(doc(collection(db, 'member')), {
    name,
    email,
    phone,
    photo,
    department,
  }).catch((error) => {
    console.log(`something was wrong :  ${error}`);
  });
};

// 데이터 수정
export const updateData = async (id, update) => {
  const documentRef = doc(db, 'member', id);
  updateDoc(documentRef, update).catch((error) => {
    console.error(`something was wrong :  ${error}`);
  });
};

// 데이터 삭제
export const deleteData = async (id) => {
  await deleteDoc(doc(db, 'member', id));
};
