import React from "react";

// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/geo
import { ResponsiveChoropleth } from "@nivo/geo";
import { mockGeographyData } from "../Data/mockData";
import { geoFeatures } from "../Data/mocKGeoFeatures";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const GeoChart = ({ dashboard }) => (
  <ResponsiveChoropleth
    data={mockGeographyData}
    features={geoFeatures.features}
    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    colors="BuGn"
    domain={[0, 1000000]}
    unknownColor="#666666"
    label="properties.name"
    valueFormat=".2s"
    projectionTranslation={[0.5, 0.5]}
    projectionRotation={[0, 0, 0]}
    enableGraticule={true}
    graticuleLineWidth={0}
    graticuleLineColor="#dddddd"
    borderWidth={0.5}
    borderColor="#152538"
    projectionScale={dashboard ? 30 : 110}
    legends={
      dashboard
        ? []
        : [
            {
              anchor: "bottom-left",
              direction: "column",
              justify: true,
              translateX: 20,
              translateY: -100,
              itemsSpacing: 0,
              itemWidth: 94,
              itemHeight: 18,
              itemDirection: "left-to-right",
              itemTextColor: "#444444",
              itemOpacity: 0.85,
              symbolSize: 18,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000000",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]
    }
  />
);
export default GeoChart;
