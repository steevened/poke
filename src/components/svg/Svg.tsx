import { FC } from 'react';

interface SvgProps {
  solid?: boolean;
}

export function PokeBallIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.8096 16C19.8096 18.1039 18.104 19.8095 16.0001 19.8095C13.8961 19.8095 12.1906 18.1039 12.1906 16C12.1906 13.8961 13.8961 12.1905 16.0001 12.1905C18.104 12.1905 19.8096 13.8961 19.8096 16Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.0001 32C24.0606 32 30.729 26.0395 31.838 18.2857H22.467C21.5257 20.949 18.9857 22.8571 16.0001 22.8571C13.0144 22.8571 10.4745 20.949 9.53312 18.2857H0.162109C1.27121 26.0395 7.93957 32 16.0001 32ZM9.53312 13.7143H0.162109C1.27121 5.96047 7.93957 0 16.0001 0C24.0606 0 30.729 5.96047 31.838 13.7143H22.467C21.5257 11.051 18.9857 9.14286 16.0001 9.14286C13.0144 9.14286 10.4745 11.051 9.53312 13.7143ZM19.8096 16C19.8096 18.1039 18.104 19.8095 16.0001 19.8095C13.8961 19.8095 12.1906 18.1039 12.1906 16C12.1906 13.8961 13.8961 12.1905 16.0001 12.1905C18.104 12.1905 19.8096 13.8961 19.8096 16Z"
        fill="currentColor"
      />
    </svg>
  );
}

export const StartIcon: FC<SvgProps> = ({ solid = false }) => {
  return (
    <>
      {solid ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      )}
    </>
  );
};
