import CSE from "./courses/CSE";
import IT from "./courses/IT";
import CCE from "./courses/CCE";
import AIML from "./courses/AIML";
import AIDS from "./courses/AIDS";
const Courses = () => {
  return (
    <div>
      <ol>
        <li><Link to='/cse'>CSE</Link></li>
        <li><Link to='/cse'>IT</Link></li>
        <li><Link to='/cce'>CCE</Link></li>
        <li><Link to='/aiml'>AIML</Link></li>
        <li><Link to='/aids'>AIDS</Link></li>
      </ol>
    </div>
  );
};
export default Courses;
