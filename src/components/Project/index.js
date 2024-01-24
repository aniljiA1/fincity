import Header from '../Header'
import ProjectItems from '../ProjectItems'
import './index.css'

const projectsData = [
  {
    id: '1',
    title: 'Project Name',
    description:
      'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
    url: 'https://i.ibb.co/PjqdL5Y/1.png',
  },

  {
    id: '2',
    title: 'Project Name',
    description:
      'What was your role, your deliverables, if the project was personal, freelancing.',
    url: 'https://i.ibb.co/QpH1wpQ/2.png',
  },

  {
    id: '3',
    title: 'Project Name',
    description:
      'You can also add in this description the type of the project, if it was for web, mobile, electron.',
    url: 'https://i.ibb.co/jTgJvCk/3.png',
  },
]

const Project = () => (
  <div className="project">
    <Header />
    <h1 className="project_heading">Project</h1>
    <ul className="project_items">
      {projectsData.map(each => (
        <ProjectItems key={each.id} details={each} />
      ))}
    </ul>
  </div>
)

export default Project
