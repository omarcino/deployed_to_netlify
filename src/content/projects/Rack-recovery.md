---
title: "Rack recovery across different buildings"
date: 2027-08-01
description: "A standard process for data center technicians to respond to events of rack failures in a machine learning data center"
url: "https://omardata.com"
tags: ["Rack failures", "SPARE parts"]
image: "../../assets/images/projects/specialized-rack.jpg"
---

## Introduction

In the last years massive datacenters have been built to provide services of Artificial Intelligence such as ChatGPT, Anthropic, Codex, etc. This means that a lot of Machine Learning hosts are being deployed on those buildings. And for business purposes it is imperative to have those hosts up and running to not affect customer services.

Inevitably, at some point there will be complete rack failures, meaning that a rack with all its components, hosts and networking devices, will be completely unreachable. At this point it is imperative to bring the rack back online to restore services and reduce customer impact.


## Critical component in racks

One device that is very critical in a rack is the TOR (Top of the Rack) switch. Because if the TOR switch goes down then all the hosts in the network will be unreachable. So, this project will talk about how to replace broken TOR switches quickly so SLA (Service Level Agreement) can be achieved.

## Approach

To mitigate this kind of failure under SLA, the recommended and standard approach in data centers in general is to have a specialized rack that contains spare TOR switches. So, in case a replacement becomes necessary, the spare switches will be ready to deploy.

## Spare Rack Management

- The specialized rack for failures has different TOR switch models ready to be used as replacement. It has to be defined how many switches per model need to be available.
- This specialized rack can be live (energized) or cold (without power).
- If the specialized rack is live, then pre-configure the switches to ensure, as much as possible, that they will be a successful replacement.
- If the specialized rack is cold, then the spare switches will be available for replacement without even knowing whether they power up — this is a real risk, since a dead cold spare discovered mid-incident adds delay right when speed matters most.
- Once a switch has been used, a new switch has to be ordered immediately.

## Replacement Procedure

- DCTs (Data Center Technicians) receive an alert of a rack failure, usually through a ticketing system.
- DCTs travel to the failed rack's physical location.
- DCTs act according to the SOP (Standard Operating Procedure). For example, this can include:
  - Checking if the rack has power; if not, no switch replacement should be done — escalate to the power/facilities team instead.
  - If the rack has power, reset the TOR switch.
  - If the previous step didn't recover the TOR switch, proceed with replacement.
- Once the switch has been replaced and the rack has been recovered, close out the incident and follow the reorder step described above.

## Common problems

Not having enough switches in the specialized rack is usually caused by:

- DCTs using TOR spare switches from the specialized rack for regular break/fix work instead of dedicated stock.
- A spare TOR switch being deployed for a rack failure event, but a new switch not being ordered to replenish it.

## Recommendations

- Keep break/fix and rack-failure spare pools physically separate so break/fix usage can't silently deplete the emergency stock.
- Run periodic audits of the specialized rack's inventory against the defined per-model minimums.
- Trigger an automatic reorder as soon as a switch is pulled from the rack, rather than relying on a manual follow-up step.
- Periodically power on and validate cold spares so failures are caught before an incident, not during one.