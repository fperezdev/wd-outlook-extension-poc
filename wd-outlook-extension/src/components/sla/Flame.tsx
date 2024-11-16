interface IFlameProps {
  fill: string;
  width?: string;
  height?: string;
}

const Flame = ({ fill, width = "25", height = "25" }: IFlameProps) => (
  <svg
    className="wird-flame-container"
    width={width}
    height={height}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.7385 7.39645C18.123 8.64108 21.2501 11.5228 20.992 15.7655C20.7286 18.1275 19.742 19.6229 19.742 19.6229C19.742 19.6229 17.5507 23.6784 12.6012 23.9836C7.65178 24.2889 4.54656 20.2189 4.54656 20.2189C2.73867 17.8241 2.75502 15.1313 3.38915 13.0091C3.38915 13.0091 4.49932 9.15892 7.25386 6.26084C9.8158 3.51901 11.0332 2.85037 12.9555 2.00002C12.9628 1.99093 14.1984 5.13794 16.7385 7.39645Z"
      fill="white"
    />
    <path
      d="M17.4718 10.8448C19.3415 12.9325 19.585 14.4787 19.5668 15.7252C19.4985 17.1458 19.025 18.5171 18.2023 19.6771C16.7501 21.6847 14.4241 22.875 11.9464 22.8786C7.75464 22.8786 5.34533 19.39 5.34533 19.39C2.04387 14.3134 7.39124 9.57836 7.39124 9.57836C7.39124 9.57836 7.01513 12.6491 9.14463 12.2075C11.2469 11.5171 9.90413 9.34397 9.66974 7.11998C9.42081 4.61437 11.9464 3.66772 11.9464 3.66772C11.9464 3.66772 12.0845 5.99164 13.9451 7.34166C15.9274 8.83158 16.4889 10.3651 16.6924 11.7224C16.9467 13.6793 15.5477 15.1074 16.1273 15.6289C16.1916 15.6858 16.2712 15.7225 16.3562 15.7343C16.9122 15.8015 17.5227 14.4878 17.728 13.6048C17.9273 12.6803 17.8379 11.7168 17.4718 10.8448V10.8448Z"
      fill={fill}
    />
  </svg>
);

export { Flame };