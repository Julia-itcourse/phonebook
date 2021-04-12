import {
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List component="nav" aria-label="main mailbox folders">
      {contacts.map(({ id, name, phoneNumber }) => (
        <div>
          <ListItem key={id}>
            <ListItemText primary={name} secondary = {phoneNumber}/>
            <IconButton aria-label="delete" color="secondary" onClick = {() => onDeleteContact(id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
          <Divider />
        </div>
      ))}
    </List>

    // <ul>
    //   {contacts.map((contact) => (
    //     <li key={contact.id}>
    //       <span>{contact.name}</span>
    //       <span>{contact.phoneNumber}</span>
    //       <IconButton aria-label="delete" color="secondary">
    //         <DeleteIcon />
    //       </IconButton>
    //     </li>

    //   ))} <Divider/>
    // </ul>
  );
};

export default ContactList;
