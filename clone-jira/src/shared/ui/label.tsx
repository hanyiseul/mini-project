type LabelProps = {
children: React.ReactNode;
htmlFor: string;
onClick?: () => void;
};

export function Label({
    children,
    htmlFor,
    onClick,
}: LabelProps) {
return (
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={htmlFor} onClick={onClick}>
        {children}
    </label>
);
}
