import React from 'react';
import {Grid, Cell} from 'react-mdl';


function AboutMe(){
    return(
        <div style = {{width:'100%',margin:'auto', textAlign: 'center'}}>
        <Grid className = 'aboutMe'>
            <Cell col = {12}>
                <h1>Обо мне</h1>
                <p className = 'Me'>С другой стороны, социально-экономическое развитие представляет собой интересный эксперимент проверки инновационных методов управления процессами. В частности, дальнейшее развитие различных форм деятельности играет определяющее значение для направлений прогрессивного развития. Задача организации, в особенности же выбранный нами инновационный путь, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для инновационных методов управления процессами.</p>
          <img src = 'https://urbantasy.com/wp-content/uploads/2020/02/chester-wade-F6rApxzbLSw-unsplash-scaled.jpg'
          alt = 'avatar' className = 'avatar-aboutMe'
          />
          </Cell>
       </Grid>
        </div>
    );
}
export default AboutMe;