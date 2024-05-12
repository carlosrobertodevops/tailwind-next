export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/carlosrobertodevops.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-zinc-700">
          Carlos Roberto
        </span>
        <span className="text-sm text-zinc-500">
          carlos.silva@carloscodemy.store
        </span>
      </div>
    </div>
  )
}
