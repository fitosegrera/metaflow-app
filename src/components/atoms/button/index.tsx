import { classNames } from "@metaflow/utils/classNames";

type ButtonProps = {
  variant?: "primary" | "secondary" | "text";
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: {
    position: "leading" | "trailing" | "center";
    component: React.ReactNode;
  };
  children: React.ReactNode;
  className?: string;
  onPress?: () => void;
};

const Button = ({
  variant,
  icon,
  fullWidth,
  disabled,
  children,
  className,
  onPress,
}: ButtonProps) => {
  return (
    <>
      {variant === "primary" && (
        <button
          className={classNames(
            className,
            "px-[24px] py-[8px] min-h-[48px] text-[16px] text-light-on-primary bg-gradient-to-r from-light-primary to-light-secondary",
            fullWidth ? "w-full" : "max-w-fit"
          )}
          disabled={disabled}
          onClick={onPress}
        >
          {children}
        </button>
      )}
      {variant === "secondary" && (
        <div className="flex items-center relative">
          {icon && icon.position === "leading" && (
            <div className="absolute left-[12px]">{icon.component}</div>
          )}
          <button
            className={classNames(
              className,
              "px-[24px] py-[8px] min-h-[48px] text-[16px] text-light-primary border border-light-primary",
              fullWidth ? "w-full" : "max-w-fit"
            )}
            disabled={disabled}
            onClick={onPress}
          >
            {children}
          </button>
          {icon && icon.position === "trailing" && (
            <div className="absolute right-[12px]">{icon.component}</div>
          )}
        </div>
      )}
      {variant === "text" && (
        <button
          className={classNames(
            className,
            "px-[24px] py-[8px] min-h-[48px] text-[16px] text-light-primary",
            fullWidth ? "w-full" : "max-w-fit"
          )}
          disabled={disabled}
          onClick={onPress}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
