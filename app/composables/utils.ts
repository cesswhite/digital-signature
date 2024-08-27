interface Color {
    color: string;
    hex: string;
    rgba: string;
}

interface Size {
    size: string;
    width: number;
    class: string;
}

export const colors: Color[] =
    [
        {
            "color": "black",
            "hex": "#000000",
            "rgba": "rgba(0, 0, 0, 1)"
        },
        {
            "color": "white",
            "hex": "#ffffff",
            "rgba": "rgba(255, 255, 255, 1)"
        },

        {
            "color": "slate-500",
            "hex": "#6b7280",
            "rgba": "rgba(107, 114, 128, 1)"
        },
        {
            "color": "gray-500",
            "hex": "#6b7280",
            "rgba": "rgba(107, 114, 128, 1)"
        },
        {
            "color": "zinc-500",
            "hex": "#6c6e6f",
            "rgba": "rgba(108, 110, 111, 1)"
        },
        {
            "color": "neutral-500",
            "hex": "#6b7280",
            "rgba": "rgba(107, 114, 128, 1)"
        },
        {
            "color": "stone-500",
            "hex": "#78716c",
            "rgba": "rgba(120, 113, 108, 1)"
        },
        {
            "color": "red-500",
            "hex": "#ef4444",
            "rgba": "rgba(239, 68, 68, 1)"
        },
        {
            "color": "orange-500",
            "hex": "#f97316",
            "rgba": "rgba(249, 115, 22, 1)"
        },
        {
            "color": "amber-500",
            "hex": "#f59e0b",
            "rgba": "rgba(245, 158, 11, 1)"
        },
        {
            "color": "yellow-500",
            "hex": "#fbbf24",
            "rgba": "rgba(251, 191, 36, 1)"
        },
        {
            "color": "lime-500",
            "hex": "#84cc16",
            "rgba": "rgba(132, 204, 22, 1)"
        },
        {
            "color": "green-500",
            "hex": "#22c55e",
            "rgba": "rgba(34, 197, 94, 1)"
        },
        {
            "color": "emerald-500",
            "hex": "#10b981",
            "rgba": "rgba(16, 185, 129, 1)"
        },
        {
            "color": "teal-500",
            "hex": "#14b8a6",
            "rgba": "rgba(20, 184, 166, 1)"
        },
        {
            "color": "cyan-500",
            "hex": "#06b6d4",
            "rgba": "rgba(6, 182, 212, 1)"
        },
        {
            "color": "sky-500",
            "hex": "#0ea5e9",
            "rgba": "rgba(14, 165, 233, 1)"
        },
        {
            "color": "blue-500",
            "hex": "#3b82f6",
            "rgba": "rgba(59, 130, 246, 1)"
        },
        {
            "color": "indigo-500",
            "hex": "#6366f1",
            "rgba": "rgba(99, 102, 241, 1)"
        },
        {
            "color": "violet-500",
            "hex": "#8b5cf6",
            "rgba": "rgba(139, 92, 246, 1)"
        },
        {
            "color": "purple-500",
            "hex": "#a855f7",
            "rgba": "rgba(168, 85, 247, 1)"
        },
        {
            "color": "fuchsia-500",
            "hex": "#d946ef",
            "rgba": "rgba(217, 70, 239, 1)"
        },
        {
            "color": "pink-500",
            "hex": "#ec4899",
            "rgba": "rgba(236, 72, 153, 1)"
        },
        {
            "color": "rose-500",
            "hex": "#e879f9",
            "rgba": "rgba(232, 121, 249, 1)"
        }
    ]
export const sizes: Size[] = [
    {
        "size": "small",
        "width": 2,
        class: 'size-2'
    },
    {
        "size": "medium",
        "width": 10,
        class: 'size-4'
    },
    {
        "size": "large",
        "width": 20,
        class: 'size-6'
    },
    {
        "size": "extra-large",
        "width": 28,
        class: 'size-8'
    },
    {
        "size": "extra-large-x2",
        "width": 34,
        class: 'size-10'
    },
]