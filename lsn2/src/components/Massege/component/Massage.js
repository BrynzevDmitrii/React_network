import './../../../App.css';
import React, { useState, useEffect} from 'react';
import e from './Massage.module.css';
import TextArea from '../../TextArea/TextArea';
import Render from '../../Renedr/Renedr';

function Massage(props) {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
      if(messageList.length > 0 && messageList[messageList.length-1].author !== 'Bot') {
          setTimeout(() => {
            gluing(bot);
          }, 1200);

          let bot = {
              author: 'Bot',
              text: 'Hi',
          };
      }
  },
      [messageList]
  );

  const gluing = (send) => {
      setMessageList(List => List.concat(send));
  }
  return (
      <div className={e.masseg}>
              <TextArea gluing={gluing} />
              <Render messageList={messageList} />
      </div>
  )
}
export default Massage;