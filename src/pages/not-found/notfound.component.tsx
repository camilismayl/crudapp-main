import { Link } from 'react-router-dom';
import { Routes } from '../../router/routes';
import useLocalization from '../../assets/lang';
const NotFoundComponent = () => {
  const translate = useLocalization();

  return (
    <>
      <h1>Page not found: 404</h1>
      <Link to={Routes.default}>{translate('go_back')}</Link>
    </>
  );
};

export default NotFoundComponent;
