import './App.css'
import { CourseStaff } from './components/course-staff';


function App() {

  return (
      <div>
        <h2>Whats up gang</h2>
        <div>
          <h4>custom content here nothing reused</h4>
        </div>
        <div>
          <CourseStaff name="jerry" title="proff" rating={92}/>
          <CourseStaff name='jeff' title='ta' rating={100}/>
          <CourseStaff name='ale' title='ca' rating={95}/>
        </div>

      </div>
  )
}

export default App
