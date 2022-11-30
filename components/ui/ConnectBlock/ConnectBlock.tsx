import { CustomConnectButton } from "@components/ui"
import { useAppContext } from "@components/ui/context"
import saEvent from "@utils/saEvent"

const ConnectBlock = ({ children }) => {
  const { isConnected } = useAppContext()
  return isConnected ? (
    children
  ) : (
    <>
      <div className="flex flex-col items-center py-6 mx-auto max-w-screen-xs">
        <h1>Connect your wallet</h1>
        <p className="py-10 sm:text-lg">
          Connect your wallet to view this page
        </p>
        <div onClick={() => saEvent("connect_wallet_attempt")}>
          <CustomConnectButton />
        </div>
      </div>
    </>
  )
}

export default ConnectBlock
