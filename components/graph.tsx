// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import { ResponsiveLine } from "@nivo/line";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data = [
  {
    id: "japan",
    color: "hsl(151, 70%, 50%)",
    data: [
      {
        x: "Jan",
        y: 145,
      },
      {
        x: "Feb",
        y: 211,
      },
      {
        x: "Mar",
        y: 103,
      },
      {
        x: "Apr",
        y: 190,
      },
      {
        x: "May",
        y: 151,
      },
      {
        x: "Jun",
        y: 68,
      },
      {
        x: "Jul",
        y: 139,
      },
      {
        x: "Aug",
        y: 205,
      },
      {
        x: "Sep",
        y: 84,
      },
      {
        x: "Oct",
        y: 136,
      },
      {
        x: "Nov",
        y: 155,
      },
      {
        x: "Dec",
        y: 274,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(350, 70%, 50%)",
    data: [
      {
        x: "Jan",
        y: 134,
      },
      {
        x: "Feb",
        y: 138,
      },
      {
        x: "Mar",
        y: 14,
      },
      {
        x: "Apr",
        y: 106,
      },
      {
        x: "May",
        y: 117,
      },
      {
        x: "Jun",
        y: 13,
      },
      {
        x: "Jul",
        y: 47,
      },
      {
        x: "Aug",
        y: 51,
      },
      {
        x: "Sep",
        y: 145,
      },
      {
        x: "Oct",
        y: 61,
      },
      {
        x: "Nov",
        y: 5,
      },
      {
        x: "Dec",
        y: 154,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(278, 70%, 50%)",
    data: [
      {
        x: "Jan",
        y: 98,
      },
      {
        x: "Feb",
        y: 147,
      },
      {
        x: "Mar",
        y: 16,
      },
      {
        x: "Apr",
        y: 178,
      },
      {
        x: "May",
        y: 128,
      },
      {
        x: "Jun",
        y: 270,
      },
      {
        x: "Jul",
        y: 121,
      },
      {
        x: "Aug",
        y: 292,
      },
      {
        x: "Sep",
        y: 290,
      },
      {
        x: "Oct",
        y: 189,
      },
      {
        x: "Nov",
        y: 146,
      },
      {
        x: "Dec",
        y: 35,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(75, 70%, 50%)",
    data: [
      {
        x: "Jan",
        y: 162,
      },
      {
        x: "Feb",
        y: 134,
      },
      {
        x: "Mar",
        y: 170,
      },
      {
        x: "Apr",
        y: 22,
      },
      {
        x: "May",
        y: 182,
      },
      {
        x: "Jun",
        y: 65,
      },
      {
        x: "Jul",
        y: 143,
      },
      {
        x: "Aug",
        y: 19,
      },
      {
        x: "Sep",
        y: 130,
      },
      {
        x: "Oct",
        y: 71,
      },
      {
        x: "Nov",
        y: 57,
      },
      {
        x: "Dec",
        y: 79,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(104, 70%, 50%)",
    data: [
      {
        x: "Jan",
        y: 97,
      },
      {
        x: "Feb",
        y: 281,
      },
      {
        x: "Mar",
        y: 144,
      },
      {
        x: "Apr",
        y: 249,
      },
      {
        x: "May",
        y: 220,
      },
      {
        x: "Jun",
        y: 196,
      },
      {
        x: "Jul",
        y: 11,
      },
      {
        x: "Aug",
        y: 2,
      },
      {
        x: "Sep",
        y: 8,
      },
      {
        x: "Oct",
        y: 141,
      },
      {
        x: "Nov",
        y: 8,
      },
      {
        x: "Dec",
        y: 160,
      },
    ],
  },
];

const MyResponsiveLine = () => (
  <ResponsiveLine
    data={data}
    margin={{ top: 10, right: 5, bottom: 5, left: 5 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={null}
    axisLeft={null}
    enableGridX={false}
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[]}
  />
);

export default MyResponsiveLine;