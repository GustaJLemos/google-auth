import './styles.scss'
import { GoogleLogo } from 'phosphor-react'
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth'
import { auth } from '../../services/firebase'
import { useState } from 'react'

export function SignIn() {
    const [user, setUser] = useState<User>({} as User)

    function handleGoogleSignIn() {
        const provider = new GoogleAuthProvider();
        // auth passo todos os meus parâmetros de permissão e conexão com o firebase
        // provider guarda o provedor que eu quero utilizar do firebase
        signInWithPopup(auth, provider)
        .then(res => {
            setUser(res.user);
            console.log(res);
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="container">
            <div className="user">
                {user.photoURL && <img src={user.photoURL} alt='Foto do usuário' />}
                <strong>{user.displayName}</strong>
                <small>{user.email}</small>
            </div>

            <h1>Acesse sua conta</h1>

            <span>
                Utilizando autenticação social, por exemplo, autenticação com a Google você <br />
                facilita a vida do usuário permitindo utilizar a sua aplicação sem fazer cadastro.
            </span>

            <button type="button" className="button" onClick={handleGoogleSignIn}>
                <GoogleLogo />
                Entrar com o Google
            </button>
        </div>
    )
}