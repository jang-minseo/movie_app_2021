# 장민서 201840130

[ 09월 08일 ]
학습내용

## 1. create-react-app으로 리액트 앱 만들기

- 명령어 > npx create-react-app movie_app_2021

---

## 2. 리액트 앱 실행하기

- 명렁어 > npm start
- Terminal을 이용 할 때는 경로를 주의한다.

---

## 3. 리액트 앱 종료하기

- 명렁어 > Ctrl + c

---

## 4. 깃허브에 리액트 앱 업로드하기

- 로컬 저장소 초기화하기
- 깃허브에 저장소 만들기
- 깃허브 저장소에 리액트 앱 업로드하기
- 깃허브 저장소 확인하기

---

## 5. 리액트 앱 살펴보고 수정하기

- node_modules, public, src로 구성되있고 주로 public, src를 사용한다.
- index.js 파일 수정하기

    ```jsx
    import './index.css';
    import reportWebVitals from './reportWebvitals';

    <Reat.StrictMode />

    reportWebVitals();

    삭제!!
    ```

- app.js 파일 수정하기

```jsx
import logo from './logo.svg';
import './App.css';

<header className="App-header">
	<img src={logo} className="App-logo" alt="logo" />
	<p>
		Edit <code>srt/App.js</code> and save to reload.
	</p>
	<a className="App-link" herf="http://reactjs.org" target="_blank" rel="noopener noreferrer">
	Learn React
	</a>
</header>

삭제!!

```

---

## 6. 리액트 동작 원리

- App.js, index.js ... 파일들을 리액트가 받아와서 해석하고 만든 결과물을 index.html에 끼워 넣는다.

## 7. 리액트 기초 개념 : 컴포넌트

- function으로 정의 내린곳을 컴포넌트라고 한다.

```jsx
function App() {
	return (
		<div>
			<h1>Hello</h1>
		</div>
	);
}
```

---

## 8. 리액트 기초 개념 : JSX

- 컴포넌트는 자바스크립트와 HTML을 조합한 JSX문법을 사용해서 만든다.


