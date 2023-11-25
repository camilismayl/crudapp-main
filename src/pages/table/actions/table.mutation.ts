import { useMutation, useQueryClient } from 'react-query';
import { deletePostService } from './table.service';

export const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => {
      return deletePostService(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    },
  });
};
