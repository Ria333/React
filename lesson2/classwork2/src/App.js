import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "../src/components/comments/Comments";
function App() {
  return (
      <div className={'All'}>
        <Users/>
          < Posts/>
          <Comments/>
      </div>
  );
}
export default App;
