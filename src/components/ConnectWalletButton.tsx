import React from 'react'
import { Button, useWalletModal } from 'uikitpanswap'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'
import Trans from './Trans'

const ConnectWalletButton = (props) => {
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout, t)

  return (
    <Button style={{background: "#fcd434", color: "#000", fontSize: "16px",}} onClick={onPresentConnectModal} {...props}>
      <Trans>Connect Wallet</Trans>
    </Button>
  )
}

export default ConnectWalletButton
