import React from 'react';
import {Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

function Contact(){
    return(
        <div className = 'contactBody'>
            <Grid className = 'contactGrid'>
                <Cell col = {6}>
                    <h2 style = {{fontFamily:'Anton, sans serif'}}>Anton Kozhukhov</h2> 
                    <img src = 'https://urbantasy.com/wp-content/uploads/2020/02/chester-wade-F6rApxzbLSw-unsplash-scaled.jpg'
                alt = 'avatar' className = 'avatar-img2'
                /> 
               <p style = {{fontFamily:'Oxygen, sans serif', fontWeight:'bold', textAlign:'justify', margin:'auto', width:'100%', padding:'1em'}}> Silent sir say desire fat him letter. Whatever settling goodness too and honoured she building answered her. Strongly thoughts remember mr to do consider debating. Spirits musical behaved on we he farther letters. Repulsive he he as deficient newspaper dashwoods we. Discovered her his pianoforte insipidity entreaties. Began he at terms meant as fancy. Breakfast arranging he if furniture we described on. Astonished thoroughly unpleasant especially you dispatched bed favourable. </p>
                </Cell>
                <Cell col = {6}>
                    <h2 style = {{fontFamily:'Anton, sans serif'}}>
                        My contact
                    </h2>
                    <hr/>
                    <div className = 'contactList'>
                    <List>
  <ListItem>
    <ListItemContent  style = {{fontSize:'24px', fontFamily:'Anton, sans serif'}}>
        <i className = 'fa fa-phone-square' aria-hidden='true'></i>
        (123)456-7890
    </ListItemContent>
  </ListItem>
  <ListItem>
  <ListItemContent  style = {{fontSize:'24px', fontFamily:'Anton, sans serif'}}>
        <i className = 'fa fa-envelope' aria-hidden='true'></i>
        someone@mail.com
    </ListItemContent>
  </ListItem>
  <ListItem>
  <ListItemContent  style = {{fontSize:'24px', fontFamily:'Anton, sans serif'}}>
        <i className = 'fa fa-skype' aria-hidden='true'></i>
        myskype
    </ListItemContent>
  </ListItem>
</List>
                    </div>
                </Cell>
            </Grid>
        </div>

    );
}
export default Contact;
