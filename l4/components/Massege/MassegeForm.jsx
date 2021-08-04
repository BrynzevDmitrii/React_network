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
                <TextArea className={e.input} gluing={gluing} />
        </div>
    )}