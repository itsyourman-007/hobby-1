export function Sparkmark({ size = 30, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path d="M16 0c1.1 8.9 2.6 12.9 6.6 14.6-4 1.7-5.5 5.7-6.6 17.4-1.1-11.7-2.6-15.7-6.6-17.4C13.4 12.9 14.9 8.9 16 0Z" />
      <path
        opacity=".9"
        d="M32 15.4c-6.4.8-9.3 1.9-10.5 4.8-1.2-2.9-4.1-4-10.5-4.8 6.4-.8 9.3-1.9 10.5-4.8 1.2 2.9 4.1 4 10.5 4.8Z"
      />
    </svg>
  )
}

export function MenuIcon({ open = false, size = 20, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {open ? (
        <path
          d="M6 6l12 12M18 6L6 18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M4 9h16M4 15h16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      )}
    </svg>
  )
}
