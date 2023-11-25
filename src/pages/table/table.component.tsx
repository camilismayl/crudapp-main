import { generateGuid } from '../../core/helpers/generate-guid';
import { Table, Button, message, Modal } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useTableStyles } from './table.style';
import { useDeletePost } from './actions/table.mutation';
import { Link } from 'react-router-dom';
import { usePosts } from './actions/table.query';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../router/routes';
import useLocalization from '../../assets/lang';
const TableComponent = () => {
  const classes = useTableStyles();

  const translate = useLocalization();

  const navigate = useNavigate();
  const { data, refetch } = usePosts();
  const deletePosts = useDeletePost();

  const onAddForm = () => {
    navigate(Routes.form);
  };
  const renderActions = (_: string, record: any) => (
    <>
      <Link to={`/update/${record.id}`}>
        <EditOutlined />
      </Link>
      <Button type='link' danger>
        <DeleteOutlined
          className={classes.deleteIcon}
          onClick={() => {
            handleDelete(record.id);
          }}
        />
      </Button>
    </>
  );
  const handleDelete = async (postId: any) => {
    Modal.confirm({
      title: translate('warning'),
      okText: translate('yes'),
      cancelText: translate('no'),
      okType: 'danger',
      onOk: async () => {
        try {
          await deletePosts.mutateAsync(postId);
          refetch();
          message.success(translate('deleted_successfully'));
        } catch (error) {
          message.error(translate('deleted_error'));
        }
      },
    });
  };

  const columns = [
    {
      title: `${translate('title')}`,
      dataIndex: 'title',
      width: '400px',
    },
    {
      title: `${translate('actions')}`,
      dataIndex: 'actions',
      render: renderActions,
      width: '200px',
    },
  ];
  let locale = {
    emptyText: 'Cədvəl boşdur :)',
  };

  return (
    <div className={classes.table}>
      <Button type='primary' onClick={onAddForm} className={classes.button}>
        {translate('btn_add')}{' '}
      </Button>
      <Table
        locale={locale}
        bordered
        className={classes.table_header}
        columns={columns}
        pagination={false}
        rowKey={generateGuid}
        dataSource={data}
      />
    </div>
  );
};
export default TableComponent;
