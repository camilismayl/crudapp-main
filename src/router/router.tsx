import { createBrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import NotFoundComponent from '../pages/not-found/notfound.component';
import FormComponent from '../pages/form/form.component';
import TableComponent from '../pages/table/table.component';
import UpdateFormComponent from '../pages/update/update.component';
import HomeComponent from '../pages/home/home.component';

const router = createBrowserRouter([
  {
    path: Routes.form,
    element: <FormComponent />,
  },
  {
    path: Routes.default,
    element: <HomeComponent />,
  },

  {
    path: Routes.table,
    element: <TableComponent />,
  },
  {
    path: Routes.update,
    element: <UpdateFormComponent />,
  },
  {
    path: '*',
    element: <NotFoundComponent />,
  },
]);

export default router;
