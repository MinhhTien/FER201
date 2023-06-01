import {
  Container,
  Icon,
  Select,
  TextInput,
  Textarea,
  Button,
} from 'react-materialize';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  return (
    <Container>
      <h3>Contact</h3>
      <form onSubmit={handleSubmit}>
        <TextInput id="TextInput-38" label="Your Name" />
        <TextInput id="TextInput-39" label="Your Phone" />
        <TextInput email id="TextInput-40" label="Your Email" validate />
        <Select
          id="Select-9"
          multiple={false}
          onChange={function noRefCheck() {}}
          value=""
        >
          <option disabled value="">
            Choose your favourite nation
          </option>
          <option value="1">Indonesia</option>
          <option value="2">Malaysia</option>
          <option value="3">Thailand</option>
        </Select>
        <Textarea
          icon={<Icon>mode_edit</Icon>}
          id="Textarea-28"
          label="Your content"
        />
        <Button>Submit</Button>
      </form>
    </Container>
  );
}
