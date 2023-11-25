import { createUseStyles } from 'react-jss';

const styles = {
  table: {
    textAlign: 'center',
  },
  deleteIcon: {
    marginLeft: '15px',
  },
  table_header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    color: 'white',
  },
  table_rows: {
    width: '80px',
  },
  button: { marginTop: '20px', marginBottom: '20px', width: '600px' },
};

export const useTableStyles = createUseStyles(styles);
