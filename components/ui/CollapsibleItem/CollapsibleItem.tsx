import Chevron from "@components/icons/Chevron"
import { useState } from "react"

type Props = {
  label: string
  detail: string | JSX.Element
  id?: string
  anchor?: string
  wrapperClassName?: string
}

const CollapsibleItem = ({
  label,
  detail,
  id,
  anchor,
  wrapperClassName
}: Props) => {
  const [showDetail, setShowDetail] = useState(id && anchor == id)
  return (
    <li>
      <div
        className={`inline-flex items-center cursor-pointer group ${
          wrapperClassName || ""
        }`}
        onClick={() => setShowDetail((showDetail) => !showDetail)}
        id={id || undefined}
      >
        <div className={`flex-shrink-0 w-4 h-4 mr-4 ${showDetail && "pb-2"}`}>
          <Chevron
            className={`transition-transform duration-50 ease-out ${
              showDetail
                ? "rotate-180 group-hover:translate-x-[4px] translate-x-[8px]"
                : "group-hover:translate-x-[4px]"
            } `}
          />
        </div>
        <p>{label}</p>
      </div>
      {showDetail && (
        <div className="px-3 py-4 mt-3 border border-gray-200 xs:pl-8 xs:pr-4">
          {typeof detail == "string" ? <p className="">{detail}</p> : detail}
        </div>
      )}
    </li>
  )
}

export default CollapsibleItem

// TODO: Fix react state update - useEffect should be used to handle init state of showDetail, but at the FAQs component. Preferable to not use at all.
