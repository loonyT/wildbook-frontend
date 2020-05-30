import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextInput from '../../components/inputs/TextInput';
import Shell from './Shell';

export default function Login({ callback }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [loading, setLoading] = useState(false);

  let errorId = null;
  if (password !== passwordConfirmation) errorId = 'PASSWORDS_DO_NOT_MATCH';

  return (
    <Shell
      titleId="CREATE_ACCOUNT"
      instructionsId="CREATE_ACCOUNT_INSTRUCTIONS"
    >
      <Grid
        container
        spacing={2}
        direction="column"
        style={{ padding: 16, width: 280 }}
      >
        <Grid item>
          <TextInput
            schema={{ labelId: 'YOUR_NAME' }}
            value={name}
            onChange={newName => setName(newName)}
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <TextInput
            schema={{ labelId: 'PASSWORD' }}
            value={password}
            onChange={newPassword => setPassword(newPassword)}
            variant="outlined"
            type="password"
          />
        </Grid>
        <Grid item>
          <TextInput
            schema={{ labelId: 'CONFIRM_PASSWORD' }}
            value={passwordConfirmation}
            onChange={newPassword => setPasswordConfirmation(newPassword)}
            variant="outlined"
            type="password"
          />
        </Grid>
        <Grid item style={{ position: 'relative' }}>
          <Button
            disabled={loading || password !== passwordConfirmation}
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
                if (callback) {
                  callback();
                } else {
                  console.log('looks good!'); // redirect home
                }
              }, 1000);
            }}
            style={{ width: '100%' }}
            color="secondary"
            variant="contained"
          >
            <FormattedMessage id="CREATE_ACCOUNT" />
          </Button>
          {loading && (
            <CircularProgress
              size={24}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginLeft: -12,
                marginTop: -12,
              }}
            />
          )}
        </Grid>
        {errorId && (
          <Typography
            variant="caption"
            color="error"
            style={{ paddingLeft: 8 }}
          >
            <FormattedMessage id={errorId} />
          </Typography>
        )}
      </Grid>
    </Shell>
  );
}
