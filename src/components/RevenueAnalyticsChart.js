import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "Revenue",
    color: "rgb(32, 215, 214)",
    data: [
      {
        x: "April 04",
        y: 20,
      },
      {
        x: "April 07",
        y: 18,
      },
      {
        x: "April 10",
        y: 21,
      },
      {
        x: "April 13",
        y: 15,
      },
      {
        x: "April 16",
        y: 18,
      },
      {
        x: "April 19",
        y: 16,
      },
    ],
  },
];

const RevenueAnalyticsChart = () => (
  <ResponsiveLine
    data={data}
    margin={{ top: 100, right: 110, bottom: 100, left: 60 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    curve="monotoneX"
    colors={(d) => d.color}
    theme={{
      grid: {
        line: {
          strokeWidth: 2,
          strokeDasharray: "4 4",
          opacity: 0.4,
        },
      },
    }}
    enablePoints={false}
    enableGridX={false}
    axisTop={null}
    axisRight={null}
    lineWidth={5}
    enableArea={true}
    axisBottom={{
      orient: "bottom",
      tickSize: 0,
      tickPadding: 6,
      tickRotation: 0,
      legendPosition: "middle",
      format: (v) => `${v}`,
    }}
    axisLeft={{
      orient: "left",
      tickSize: 0,
      tickPadding: 6,
      tickRotation: 0,
      legendPosition: "middle",
      format: (v) => `$${v}K`,
    }}
    useMesh={true}
    defs={[
      {
        id: "gradientA",
        type: "linearGradient",
        colors: [
          { offset: 0, color: "rgb(32, 215, 214)" },
          { offset: 30, color: "#ffff" },
        ],
      },
    ]}
    fill={[{ match: "*", id: "gradientA" }]}
  />
);

export default RevenueAnalyticsChart;
