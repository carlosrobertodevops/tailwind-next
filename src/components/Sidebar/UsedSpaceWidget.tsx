export interface UsedSpaceWidgetProps {}

export function UsedSpaceWidgetProps(props: UsedSpaceWidgetProps) {
  return (
    <div className="mt-auto flex flex-col gap-6">
      <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5">
        <div className="space-y-1">
          <span className="text-sm/5 font-semibold text-violet-700">
            Used space
          </span>
          <p className="text-sm/5 font-semibold text-violet-500">
            Your team has used 80% of your avaliable space. Need more ?
          </p>
        </div>

        <div className="h-2 rounded-full bg-violet-100">
          <div className="h-2 w-4/5 rounded-full bg-violet-600"></div>
        </div>
        <div className="space-x-3">
          <button
            type="button"
            claassName="text-sm font-medium text-violet-700 hover:text-violet-700"
          >
            Dismiss
          </button>
          <button
            type="button"
            claassName="text-sm font-medium text-violet-700 hover:text-violet-900"
          >
            Upgrade plan
          </button>
        </div>
      </div>
    </div>
  )
}
