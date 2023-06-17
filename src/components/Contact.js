import {
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  Box,
  Button,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      program: '',
      message: '',
      agree: false,
    },
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Required.')
        .min(2, 'Must be 2 characters or more'),
      email: Yup.string().required('Required.').email('Invalid email'),
      phone: Yup.number().integer().typeError('Please enter a valid number'),
      program: Yup.number().integer().typeError('Please select a program.'),
      message: Yup.string()
        .required('Required.')
        .min(10, 'Must be 10 characters or more'),
      agree: Yup.boolean().oneOf(
        [true],
        'The terms and conditions must be accepted.'
      ),
    }),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '50vw',
          p: 2,
          boxShadow: 2,
          '& .MuiTextField-root': { m: 1 },
        }}
        onSubmit={formik.handleSubmit}
      >
        <Typography variant="h4">Contact Us</Typography>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && (
          <Typography variant="caption" color="red">
            {formik.errors.name}
          </Typography>
        )}
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && (
          <Typography variant="caption" color="red">
            {formik.errors.email}
          </Typography>
        )}
        <TextField
          fullWidth
          label="Phone"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
        />
        {formik.errors.phone && (
          <Typography variant="caption" color="red">
            {formik.errors.phone}
          </Typography>
        )}
        <FormControl fullWidth sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="demo-select-small-label">Program of Study</InputLabel>
          <Select
            label="Program of Study"
            labelId="demo-select-small-label"
            name="program"
            value={formik.values.program}
            onChange={formik.handleChange}
          >
            <MenuItem value={0}>
              <em>Please select</em>
            </MenuItem>
            <MenuItem value={1}>Software Engineering</MenuItem>
            <MenuItem value={2}>Information System</MenuItem>
            <MenuItem value={3}>Information Assurance</MenuItem>
            <MenuItem value={4}>Internet of Things</MenuItem>
            <MenuItem value={5}>Artificial Intelligence</MenuItem>
            <MenuItem value={6}>Digital Art & Design</MenuItem>
          </Select>
        </FormControl>
        {formik.errors.program && (
          <Typography variant="caption" color="red">
            {formik.errors.program}
          </Typography>
        )}
        <TextField
          fullWidth
          label="Message"
          multiline
          rows={4}
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
        />
        <FormControlLabel
          control={<Switch />}
          label="Agree to terms and conditions."
          name="agree"
          value={formik.values.agree}
          onClick={formik.handleChange}
        />
        {formik.errors.agree && (
          <Typography variant="caption" color="red">
            {formik.errors.agree}
          </Typography>
        )}
        <Button type="submit" variant="contained">
          Send
        </Button>
      </Box>
    </form>
  );
};

export default Contact;
