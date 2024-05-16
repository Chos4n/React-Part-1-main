import componentImg from "./assets/img/components.png";
import JsxImg from "./assets/img/jsx-ui.png";
import PropImg from "./assets/img/config.png";
import StateImg from "./assets/img/state-mgmt.png";



export const data =[
  {
    image: componentImg,
    title: 'Components',
    description: 'The core UI building block- compose the user interface by combining multiple components'
  },
  {
    image: JsxImg,
    title: 'JSX',
    description: 'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered'
  },
  {
    image: PropImg,
    title: 'Props',
    description: 'Make components configurable (and therefore reusable) by passing input data to them'
  },
  {
    image: StateImg,
    title: 'State',
    description: 'React-managed data which when changed, causes the components to re-render & the UI to update.'
  }
];