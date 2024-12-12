// "use client"

// import { TrendingUp } from "lucide-react"
// import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart"
// const chartData = [{ month: "january", Sportcar: 1260, mobile: 570 }]

// const chartConfig = {
//     Sportcar: {
//     label: "Sportcar",
//     color: "",
//   },
//   mobile: {
//     label: "Mobile",
//     color: "hsl(var(--chart-2))",
//   },
// } satisfies ChartConfig

// export function Component() {
//   const totalVisitors = chartData[0].Sportcar + chartData[0].mobile

//   return (
//     <div className=" bg-white h-[200px] w-[200px]">
    
//       <CardContent className="flex items-center pb-0">
//         <ChartContainer
//           config={chartConfig}
//           className="mx-auto aspect-square w-[230px]"
          
//         >
//           <RadialBarChart
//             data={chartData}
//             endAngle={360}
//             innerRadius={80}
//             outerRadius={130}
//           >
//             <ChartTooltip
//               cursor={false}
//               content={<ChartTooltipContent hideLabel />}
//             />
//             <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
//               <Label
//                 content={({ viewBox }) => {
//                   if (viewBox && "cx" in viewBox && "cy" in viewBox) {
//                     return (
//                       <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
//                         <tspan
//                           x={viewBox.cx}
//                           y={(viewBox.cy || 0) - 16}
//                           className="fill-foreground text-2xl font-bold"
//                         >
//                           {totalVisitors.toLocaleString()}
//                         </tspan>
//                         <tspan
//                           x={viewBox.cx}
//                           y={(viewBox.cy || 0) + 4}
//                           className="fill-muted-foreground"
//                         >
//                           Visitors
//                         </tspan>
//                       </text>
//                     )
//                   }
//                 }}
//               />
//             </PolarRadiusAxis>
//             <RadialBar
//               dataKey="desktop"
//               stackId="a"
//               cornerRadius={5}
//               fill="var(--color-desktop)"
//               className="stroke-transparent stroke-2"
//             />
//             <RadialBar
//               dataKey="mobile"
//               fill="var(--color-mobile)"
//               stackId="a"
//               cornerRadius={5}
//               className="stroke-transparent stroke-2"
//             />
//           </RadialBarChart>
//         </ChartContainer>
//       </CardContent>

//     </div>
//   )
// }


"use client";

import { TrendingUp } from "lucide-react";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  {
    month: "January",
    desktop: 1260,
    mobile: 570,
    tablet: 400,
    smartTv: 300,
    others: 150,
  },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
  tablet: {
    label: "Tablet",
    color: "hsl(var(--chart-3))",
  },
  smartTv: {
    label: "Smart TV",
    color: "hsl(var(--chart-4))",
  },
  others: {
    label: "Others",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function Component() {
  const totalVisitors =
    chartData[0].desktop +
    chartData[0].mobile +
    chartData[0].tablet +
    chartData[0].smartTv +
    chartData[0].others;

  return (
    <div className="bg-white h-[220px] w-[220px]">
      <CardContent className="flex items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-[300px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={360}
            innerRadius={80}
            outerRadius={130}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            {/* Bars for each section */}
            <RadialBar
              dataKey="desktop"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-desktop)"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="mobile"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-mobile)"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="tablet"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-tablet)"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="smartTv"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-smartTv)"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="others"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-others)"
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </div>
  );
}
