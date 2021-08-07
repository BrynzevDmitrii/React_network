import React from 'react';
import e from './PostUser.module.css'

function PostUser () {
    return(
        <div className = {e.user}>
            <div className = {e.userFoto}>
                <img className = {e.size} src  = 'patric.jpg' alt = 'foto'></img>
                <span className = {e.absol}>Hello my name is Patrick. I was born and raised in Detroit, Michigan. After completing my bachelor’s degree, I moved to Boston and taught high school history. While working as a teacher, I completed a master of science in occupational therapy with a focus on early childhood development.

Shortly before beginning my masters program, I went hiking in Spain and fell in love with a beautiful German woman. I am happy to report that we eventually got married and moved to Germany! Since 2016 I have been living in Baden-Württemberg and working as an English teacher and early childhood educator.

My classroom philosophy is heavily influenced by my overall goal of instilling a lifelong love of learning. I strive to create a classroom environment that promotes self-discovery, self-awareness, and self-reliance. It is my hope and belief that these skills will enable today’s young thinkers to blossom into tomorrow’s leaders.

When I am outside of the classroom I am likely inside of a library. However, on long weekends, I enjoy traveling, hiking and camping. My hobbies at home include reading, taking care of my plants, and</span>
            </div>
            <div className = {e.userinfo}>Informatics Europe represents the academic and research community in Informatics in Europe. Bringing together university departments and research laboratories, it creates a strong common voice to safeguard and shape quality research and education in Informatics in Europe. With over 150 member institutions across 34 countries, Informatics Europe promotes common positions and acts on common priorities.
            Here is a snapshot overview of what we do and what we stand for.</div>
            <div className = {e.userPost}>post</div>
        </div>
        
    )
}
export default PostUser;
