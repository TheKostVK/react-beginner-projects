import React, {useEffect, useState} from 'react';
import './index.scss';
import {Success} from './components/Success';
import {Users} from './components/Users';



function App() {
    const [users, setUsers] = useState([]);
    const [invitesUsers, setInvitesUsers] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [success, setSuccess] = useState(false);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        Promise.all([
            fetch('https://reqres.in/api/users?page=1').then(res => res.json()),
            fetch('https://reqres.in/api/users?page=2').then(res => res.json()),
        ])
            .then(data => {
                const users = data.map(d => d.data).flat(); // объединяем данные из всех ответов в один массив пользователей
                setUsers(users);
            })
            .catch(err => {
                console.warn(err);
                alert('Ошибка получения списка пользователей!');
            })
            .finally(() => setLoading(false));
    }, []);

    const onClickInvite = (id) => {
        if (invitesUsers.includes(id)) {
            setInvitesUsers(prev => prev.filter(_id => _id !== id));
        } else {
            setInvitesUsers(prev => [...prev, id]);
        }
    };

    const onChangeSearchValue = (event) => {
        setSearchValue(event.target.value);
    };

    const onClickSendInvites = () => {
        setSuccess(true);
    };

    return (
        <div className="App">
            {!success ? (
                <Users
                    searchValue={searchValue}
                    onChangeSearchValue={onChangeSearchValue}
                    items={users}
                    invitesUsers={invitesUsers}
                    onClickInvite={onClickInvite}
                    onClickSendInvites={onClickSendInvites}
                    isLoading={isLoading}
                />
            ) : (
                <Success count={invitesUsers.length} />
            )}
        </div>
    );
}

export default App;
