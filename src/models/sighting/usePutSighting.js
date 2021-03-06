import { useContext, useState } from 'react';
import axios from 'axios';
import { get } from 'lodash-es';
import { AppContext, setSightingsNeedsFetch } from '../../context';
import { formatError } from '../../utils/formatters';

export default function usePutSighting() {
  const { dispatch } = useContext(AppContext);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const putSighting = async data => {
    try {
      const response = await axios({
        url:
          'https://nextgen.dev-wildbook.org/api/v0/org.ecocean.Occurrence',
        withCredentials: true,
        method: 'post',
        data,
      });
      const successful = get(response, ['data', 'success'], false);
      if (successful) {
        dispatch(setSightingsNeedsFetch(true));
        setSuccess(true);
        setError(null);
        return true;
      }

      setError(formatError(response));
      setSuccess(false);
      return false;
    } catch (postError) {
      setError(formatError(postError));
      setSuccess(false);
      return false;
    }
  };

  return {
    putSighting,
    error,
    setError,
    success,
    setSuccess,
  };
}
