# 장민서 201840130
[ 10월 06일 ]

# 1. 영화 API사용해 보기

## axios 설치하기

```markdown
npm install axios
```

- javascript에서는 영화 데이터를 로딩 할 때 fetch()함수를 사용한다.
- 하지만 이시간은 javascript시간이 아님으로 axios를 사용한다.

## YTS영화 데이터 API살펴보기

- 브라우저 주소창에 yts.lt/api라고 입력하고, YTS영화 데이터 API 사이트에 접속
- 우리가 사용하는 API는 'List Movies API' 이다.
- API는 특정 주소를 입력하면 그 주소에 맞는 결과를 보내 준다.

## 영화 목록 데이터 확인하기

```markdown
https://yts.mx/api/v2/list_movies.json
```

## JSON Viewer 확장 도구 설치

## 콘솔에 영화 데이터 출력해보기

```jsx
getMovies = async () =>	{
	const movies = await axios.get('https://yts.mx/api/v2/list_movies.json')
	console.log(movies);
}
```

## movies state에 영화 데이터 저장하기
- this.set({movies:movies})와 같이 작성해서 movies state에 데이터를 저장한다.

```jsx
getMovies = async () =>	{
	const {
	data: {
		data: {movies}
	}
	} = await axios.get('https://yts.mx/api/v2/list_movies.json')
	this.setState({movies}); // 객체의 키와 변수값의 이름이 같다면 축약 가능
}
```

## isLoaing state를 true에서 false로 업데이트 하기

```jsx
getMovies = async () =>	{
	const {
	data: {
		data: {movies}
	}
	} = await axios.get('https://yts.mx/api/v2/list_movies.json')
	this.setState({movies, isLoading: false}); 
}
```

[ 09월 29일 ]

## 1. Git 브랜치 관련 설정

---

```markdown
git version // 2.28.0이상인지 확인
git config —global init.dfaulBranch main
```

```markdown
git config --list
```

```markdown
git branch -m 이전이름 바꿀이름
```

---

# 2. Prop-types

```markdown
> npm install prop-types 설치하기
```

- Package.json 파일을 열어 dependencies 키에 Prop-types가 등록되어 있으면 설치가 정상적으로 된 것이다.
- Prop-types는 컴포넌트가 전달받은 props가 원하는 값인지 확인해 주는 역할을 한다.
- 적용하는 법은 import PropTypes from 'prop-types'; 를 App.js 파일 맨 위에 추가한다.

---

# 3. State

---

- props는 정적인 데이터만 다룰 수 있다.
- state는 동적인 데이터를 다루기 위해 사용된다.
- state는 class형 컴포넌트에서 사용된다.
- state는 객체형태의 데이터이다.
- state를 사용하려면 반드시 class형 컴포넌트 안에서, 소문자를 사용하여 state라고 적는다.

[ 09월 15일 ]

## 1. 세 번째 리엑트 기초 개념 : props

- Props란 컴포넌트에서 컴포넌트로 전달하는 데이터를 말한다. 함수의 매개변수 역할을 하는 것이다. 따라서 props를 사용하면 컴포넌트를 효율적으로 사용할 수 있다.

```jsx
function App() {
	return (
			<div>
				<h1>Hello</h1>
				<Food fav="kimchi" />   <-- fav는 favorite의 줄임말
			</div>
);
}
```

- props를 이용하여 컴포넌트에 데이터를 보내는 방법
- props의 이름이 fav이고, fav에 kimchi라는 값을 넣어 Food컴포넌트에 전달 한 것
- props에는 불린값(true,false), 숫자, 배열과 같은 다양한 형태의 데이트를 사용할 수 있다.
- props의 전달 데이터는 문자열의 경우를 제외하면 모두 '{ }' 로 감싸야 한다.

---

## 2. 구조 분해 할당으로 props사용하기

- ES6의 문법 중 구조 분해 할당을 사용하면 점 연산자를 사용하지 않아도 된다.

---

## 3. map() 함수

- map()함수는 배열의 모든 원소 마다 특정 작업을 하는 함수를 적용하고, 그 함수가 반환한 결과를 모아서 배열로 반환해 준다.

---


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


