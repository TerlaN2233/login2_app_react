import { useState } from 'react'
import style from './login.module.css'
export default function Login() {
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const [error2, setError2] = useState('');

    const onSubForm = (e) => {
        e.preventDefault()

        if (!username) {
            setError('Ad bosh qala bilmez')
        } else {
            setError('')
        }

        if (username && e.target.length <= 8) {
            setError2('Yazının sayı minumum 8 və 8-dən böyük olmalıdır')
        } else {
            setError2('')
        }

        if (username && username.length > 8) {
            alert('Siz uqurla qeydiyyatdan kecdiniz!')
        }
    }
    return (
        <>
            <form action="" onSubmit={onSubForm} >
                <div className={style.inpBase}>
                    <div className={style.inpBox}>
                        <label className={style.label}>username</label>
                        <input onChange={e => setUsername(e.target.value)}
                            className={
                                error && username.length <= 0 ? style.errorInp : '' ||
                                    error2 && username.length <= 8 ? style.errorInp : ''
                            }
                            type="text" placeholder="UserName" />

                        {error && username.length <= 0 ?
                            <p className={error && username.length <= 0 ? style.errorP : ''} >
                                {error}
                            </p>
                            : ''}

                        {error2 && username.length <= 8 ?
                            <p className={error2 && username.length <= 8 ? style.errorP : ''} >
                                {error2}
                            </p>
                            : ''}
                    </div>

                    <div className={style.inpBox}>
                        <button className={style.btnClick}>Login</button>
                    </div>
                </div>
            </form>
        </>
    )
}