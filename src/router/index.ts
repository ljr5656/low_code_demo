import {
  createBrowserRouter,
} from 'react-router-dom'
import { Home } from '../pages/home'
import { Preview } from '../pages/preview'

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: '/preview',
    Component: Preview,
    loader: () => {
      return {
        name: ''
      }
    }
  }
]);

export default router