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

export const BigPokeBallIcon = () => {
  return (
    <svg
      width="128"
      height="128"
      viewBox="0 0 128 128"
      // className="animate-spin "
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M79.2382 64C79.2382 72.4158 72.4158 79.2381 64.0001 79.2381C55.5843 79.2381 48.762 72.4158 48.762 64C48.762 55.5842 55.5843 48.7619 64.0001 48.7619C72.4158 48.7619 79.2382 55.5842 79.2382 64Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M64.0001 128C96.2421 128 122.916 104.158 127.352 73.1429H89.8679C86.1025 83.796 75.9426 91.4286 64.0001 91.4286C52.0575 91.4286 41.8976 83.796 38.1322 73.1429H0.648193C5.08458 104.158 31.758 128 64.0001 128ZM38.1322 54.8571H0.648193C5.08458 23.8419 31.758 0 64.0001 0C96.2421 0 122.916 23.8419 127.352 54.8571H89.8679C86.1025 44.204 75.9426 36.5714 64.0001 36.5714C52.0575 36.5714 41.8976 44.204 38.1322 54.8571ZM79.2382 64C79.2382 72.4158 72.4158 79.2381 64.0001 79.2381C55.5843 79.2381 48.762 72.4158 48.762 64C48.762 55.5842 55.5843 48.7619 64.0001 48.7619C72.4158 48.7619 79.2382 55.5842 79.2382 64Z"
        fill="currentColor"
      />
    </svg>
  );
};

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
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      )}
    </>
  );
};

export const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );
};

export const ArrowIcon = ({ rotate = false }: { rotate?: boolean }) => {
  return (
    <>
      {rotate ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      )}
    </>
  );
};
