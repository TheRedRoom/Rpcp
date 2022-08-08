
function InfosAccount(props) {
    return (
        <div>
            {!props.loader &&
                props.accounts.length > 0 ?
                <div>
                <p>Your connected account is : {props.accounts[0]}</p>
                {props.allowance && <p>You have {props.allowance/10**6} USDC approved for minting on your account.</p>}
                {props.allowance <= 0 && <p className="infos"></p>}
                </div>
                :
                <p>You are not connected with Metamask on this website.
                    Please connect with a compatible browser for Metamask, not on your phone.
                </p>
            }
        </div>
    )
}

export default InfosAccount;