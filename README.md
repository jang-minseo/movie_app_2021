# 장민서 201840130
# [ 11월 24일 ]
## REACT 시작하기
- React는 처음부터 점진적으로 적용할 수 있도록 설계되었으며 필요한 만큼 React를 사용할 수 있다.
- 대규모 애플리케이션에 권장되는 여러 개의 JavaScript 툴체인들이 있음. 각 툴체인은 많은 설정 없이 작동할 수 있고 풍부한 React 에코시스템을 최대한 활용할 수 있다.
## 주요 개념
### jsx
- JavaScript를 확장한 문법
- UI가 어떻게 생겨야 하는지 설명하기 위해 React와 함께 사용할 것을 권장
- JSX라고 하면 템플릿 언어가 떠오를 수도 있지만, JavaScript의 모든 기능이 포함되어 있다.
### 엘리먼트 랜더링
- 엘리먼트는 React 앱의 가장 작은 단위
- 브라우저 DOM 엘리먼트와 달리 React 엘리먼트는 일반 객체이며(plain object) 쉽게 생성 가능
- React DOM은 React 엘리먼트와 일치하도록 DOM을 업데이트
### Component, Props
- 개념적으로 컴포넌트는 JavaScript 함수와 유사
- 'props'라고 하는 임의의 입력을 받은 후, 화면에 어떻게 표시되는지를 기술하는 React 엘리먼트를 반환



# [ 11월 17일 ]
## REACT 공식문서
### MARKDOWN 변환
```jsx
class App extends React.Component {
  constructor(props) {
    super(props);
    this.md = new Remarkable();
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: 'Hello, **world**!' };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  getRawMarkup() {
    return { __html: this.md.render(this.state.value) };
  }

  render() {
    return (
      <div className="MarkdownEditor">
        <h3>Input</h3>
        <label htmlFor="markdown-content">
          Enter some markdown
        </label>
        <textarea
          id="markdown-content"
          onChange={this.handleChange}
          defaultValue={this.state.value}
        />
        <h3>Output</h3>
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
      </div>
    );
  }
}

export default App
```

### 리스트 추가
```jsx
<head>
   <script type="text/babel">
       class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('todos-example')
);

    </script>
</head>
<body>
    <div id="hello-example"></div> 
</body>
```
# [ 11월 10일 ]

## movie app 배포하기
- script에 depoly와 predeploy 추가
```jsx
"script": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "deploy": "gh-pages -d build",
    "predeploy": "npm run build"
}
```

```markdown npm install gh-pages```을 사용하여 gh-pages 설치하기

```markdown git remote -v```을 사용하여 깃허브 주소 확인하기

```markdown npm run deploy```을 사용하여 배포하기

## package.json과 package-lock.json 차이
- package.json은 패키지 의존성 관리 파일
- 협업 등 팀원들 각자의 컴퓨터에 같은 패키지를 설치하여 동일한 개발환경을 구성해야 할때 package.json 사용
- package.json의 경우는 version range를 사용 ex) "express": "~4.16.1"


# [ 11월 03일 ]

## 영화 상세 정보 기능 만들어 보기
- route props를 이용해 영화 카드를 누르면 상세 정보를 보여주는 기능을 만들어 본다.
- route props는 라우팅 대상이 되는 컴포넌트에 넘겨주는 기본 props를 말한다.
```jsx
function Navigaion() {
  return (
    <div className="nav">
      ...
      <Route path="/movie-detail" component={Detail} />;
    </div>
  );
}

export default Navigation;
```
- pathname은 URL을 의미하며, state는 우리가 route props에 보내줄 데이터를 의미한다.

## 네비게이션 컴포넌트 정리

## Detail 컴포넌트 만들기
```jsx
class Detail extends React.Component {
  componentDidMount() {
    const { history, location } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }

  render() {
    const {
      location: { state },
    } = this.props;
    if (state) {
      const { year, title, summary, poster, genres } = state;
      return (
        <div>
          <h1>{title}</h1>
          <p>{year}</p>
          <p>{summary}</p>
          <p>{genres}</p>
        </div>
      );
    } else {
      return null;
    }
  }
}
```

## Movie 컴포넌트에 Link 컴포넌트 추가하기

## Route 컴포넌트 추가하기

## package.json과 package-lock.json의 차이
- package.json은 의존성 관리 파일이다.




# [ 10월 27일 ]

## li tag에 key props 추가
- map()함수에는 2번째 매개변수를 지정할 경우 배열의 index값을 반환해 주는 기능이 있다.
```jsx
genres.map((gnere, index) => { ... })

----> <ul className="movie__genres">
	{genres.map((genre, index) => {
	return (
	<li key={index} className="movie__genre">
	{genre}
	</li>
	);
	})}
	</ul>
```

## APP.css 수정

## 시놉시스 180자로 제한
- 자바스크립트의 slice함수를 이용하여 구현한다.
```markdown
"hereisstring".slice(0, 10) // h부터 0 1 2 ... g가 11    slice(시작, 끝)
```
```jsx
<p className="movie__summary">{summary.slice(0, 180)} ... </p>
```

## react-router-dom 설치 및 프로젝트 폴더 정리
```markdown
>npm install react-router-dom
```
- src/routes 폴더 만들고 Home.js와 About.js 파일 생성
- App.js내용을 Home.js로 복사하고 컴포넌트이름을 Home으로 수정
- Home.css를 생성하고 Home.js에 import

## 라우터 만들어 보기
- 라우터는 사용자가 입력한 URL을 통해 특정 컴포넌트를 불러준다.
- HashRouter와 Route컴포넌트 사용
```jsx
import About from './routes/About'

function APP() {
return (
   <HashRouter>
     <Router PATH='/about' component={About} />
   </HashRouter>
)
}
```
## App.js 수정
```jsx
import About from './routes/About'
import About from './routes/Home'

function APP() {
return (
   <HashRouter>
   <Router path= '/' exact={true} component={Home} />
   <Router path='/about' component={About} />
   </HashRouter>
)
}
```
- localhost:3000에 접속하면 주소 뒤에 자동으로 /#/이 붙으면서 영화 앱 화면이 나타난다.

## 네비게이션 만들기
```jsx
import { Link } from 'react-router-dom'

function Navigation() {
	return (
	<div>
	<Link ='/'>Home</Link>
	<Link ='/about'>About</Link>
	<div>
)
}
```

# [ 10월 13일 ]

## Movie.propTypes작성
- id의 자료형은 Number이고, 반드시 있어야 한다. ProType.number.isRequired로 작성한다.
```jsx
Movie.propTypes = {
	id: PropTypes.number.isRequired,
	year: PropTypes.number.isRequired,
	title: PropTypes.number.isRequired,
	summary: PropTypes.number.isRequired,
	poster: PropTypes.number.isRequired
};
```

## API 정렬 기능
```jsx
 getMovies = async () =>	{
	const {
	data: {
		data: {movies}
	}
	} = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
} // 평점을 기준으로 내림차순으로 영화데이터 정렬해서 출력
```

## Movie 컴포넌트를 반환하도록 movies.map() 수정
```markdown
import Movie from './Movie'
App.js에 Movie 컴포넌트를 import한 다음, movies.map()에 전달한 함수가 <Movie />를 반환
```

## Movie컴포넌트에 props 전달
- id, year, title, summary, poster를 isRequired로 설정해서 props를 모두 전달 해야한다.
```jsx
<Movie
	id={movie.id}
	year={movie.year}
	title={movie.title}
	summary={movie.summary}
	poster={movie.medium_cover_image}
/>
```

# [ 10월 06일 ]

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


