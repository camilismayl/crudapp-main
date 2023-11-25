import { IFormValues } from './form';
import { Form, Input, Button, Space } from 'antd';
import { useAddPost } from './actions/form.mutation';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../router/routes';
import useLocalization from '../../assets/lang';
const FormComponent = () => {
  const addPost = useAddPost();
  const navigate = useNavigate();
  const translate = useLocalization();

  const initialValues: IFormValues = {
    title: '',
  };
  const onSubmit = async (values: IFormValues) => {
    await addPost.mutateAsync(values);
    navigate(Routes.table);
  };

  return (
    <div>
      <Space>
        <Form initialValues={initialValues} name='basic' onFinish={onSubmit}>
          <Form.Item
            name='title'
            label={`${translate('title')}`}
            rules={[
              { required: true, message: `${translate('empty_message')}` },
            ]}
          >
            <Input autoFocus={true} />
          </Form.Item>

          <Button type='primary' htmlType='submit'>
            {translate('btn_submit')}
          </Button>
        </Form>
      </Space>
    </div>
  );
};

export default FormComponent;
