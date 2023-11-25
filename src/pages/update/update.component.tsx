import { Form, Input, Button } from 'antd';
import { useUpdatePost } from './actions/update.mutation';
import { useNavigate, useParams } from 'react-router-dom';
import { IFormValues } from '../form/form';
import { Routes } from '../../router/routes';
import useLocalization from '../../assets/lang';
import { useFormStyles } from './update.style';
const UpdateFormComponent = () => {
  const translate = useLocalization();
  const classes = useFormStyles();

  const updatePost = useUpdatePost();
  const navigate = useNavigate();
  const params = useParams();
  const postId = Number(params.id);

  const onSubmit = async (values: IFormValues) => {
    await updatePost.mutateAsync({ postId, updatedData: values });
    navigate(Routes.table);
  };

  return (
    <div>
      <Form name='basic' onFinish={onSubmit}>
        <Form.Item
          name='title'
          label={`${translate('title')}`}
          rules={[{ required: true, message: `${translate('empty_message')}` }]}
        >
          <Input className={classes.input} autoFocus={true} />
        </Form.Item>

        <Button type='primary' htmlType='submit'>
          {translate('btn_update')}{' '}
        </Button>
      </Form>
    </div>
  );
};

export default UpdateFormComponent;
