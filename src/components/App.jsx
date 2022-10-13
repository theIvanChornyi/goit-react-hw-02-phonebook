import { Component } from 'react';
import { Section } from './Section';
import { Box } from './Box';
import { Contacts } from './Contacts';
import { PhonebookForm } from './PhonebookForm';

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  name: '',
  number: '',
  filter: '',
};

export class App extends Component {
  state = { ...INITIAL_STATE };
  render() {
    return (
      <Box as="main">
        <Section tittle="Phonebook">
          <PhonebookForm />
        </Section>
        <Section tittle="Contacts">
          <Contacts contacts={this.state.contacts} />
        </Section>
      </Box>
    );
  }
}
