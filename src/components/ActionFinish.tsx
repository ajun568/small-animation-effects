import React, { useEffect } from 'react';
import * as d3 from 'd3';

const ActionFinish: React.FC = () => {
  useEffect(() => {
    const width = 80;
    const height = 80;
    const r = width / 2;
    const d = width;
    const path = "M32,64 C14.326625,64 0,49.673375 0,32 C0,14.326625 14.326625,0 32,0 C49.673375,0 64,14.326625 64,32 C64,49.673375 49.673375,64 32,64 Z M28.9122437,40.392875 L19.7956812,31.167 L13.7846062,36.9087875 C18.1563,39.2634937 24.2811062,43.5579125 29.5271062,50.21535 C33.2341812,43.247725 44.6596687,28.9944125 50.2153562,27.71935 C49.3183687,24.1264875 48.8127687,17.38235 50.2153562,13.7846 C38.8218562,21.2986625 28.9127312,40.39285 28.9127312,40.39285 L28.9122437,40.392875 Z";
    const rectWidth = 46;
    const rectDistance = 17;
    const bgColor = 'rgb(44, 150, 120)';

    let svg = d3.select('#actionFinish')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
      
      svg.append('g')
        .attr('stroke-width', 1)
        .attr('stroke', 'none')
        .attr('fill', 'none')
        .attr('fill-rule', 'evenodd')
        .attr('class', 'tick')

      svg.selectAll('.tick')
        .append('circle')
        .attr('stroke', bgColor)
        .attr('class', 'cubic-bezier')
        .attr('stroke-dasharray', Math.PI * d)
        .attr('stroke-dashoffset', Math.PI * d)
        .attr('cx', r)
        .attr('cy', r)
        .attr('r', r)
        .attr('stroke-width', 3)
        .attr('opacity', 1)
        .attr('stroke-miterlimit', 10)

      svg.selectAll('.tick')
        .append('g')
        .attr('fill', bgColor)
        .attr('fill-rule', 'nonzero')
        .attr('transform', 'translate(8, 8)')
        .attr('class', 'path')

      svg.selectAll('.path')
        .append('path')
        .attr('d', path)

      svg.selectAll('.tick')
        .append('rect')
        .attr('width', rectWidth)
        .attr('height', rectWidth)
        .attr('fill', bgColor)
        .attr('stroke', 'none')
        .attr('transform', `translate(${rectDistance}, ${rectDistance})`)
        .transition()
        .duration(400)
        .delay(1200)
        .ease(d3.easeLinear)
        .attr('width', 0)
        .attr('transform', `translate(${rectWidth + rectDistance}, ${rectDistance})`)
  }, [])

  return (
    <div id="actionFinish"></div>
  )
}

export default ActionFinish;
