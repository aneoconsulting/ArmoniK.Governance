# AEP X: ArmoniK Infrastructure redesign

|                   |ArmoniK Enhancement Proposal|
---:                |:---
**AEP**             | 
**Title**           | ArmoniK Infrastructure redesign
**Author**          | 
**Status**          | Draft
**Type**            | Standard
**Creation Date**   | 2024-03-04


# Abstract

This AEP describes the choice and give a global view to redesign ArmoniK's infrastructure.

# Motivation

The motivation behind the redesign of the infrastructure is to have an infrastructure that is light, modular and easy to maintain. By standardizing the expected outputs for the various modules, the switch between one technology vendor to another one will be made easy. 


# Rationale

Updating or proposing alternatives solution for various component with the current infrastructure is challenging at time. 

# Specifications

First we define the input variables that are expected from Armonik. This is the output provided by the modules. These variables are environment variables. Kubernetes defines 3 ways to poupulate these viarbles: using environment variable methods, config maps, secret, and mount from envir

## ArmoniK inputs (from storage module outputs)

```tf
variable "control_plane_env" {
    description = "Environment variables to pass to the control plane"
    type        = map(string)
    default     = {}
    // Example:
    // {
    //   "Components__QueueAdaptorSettings__AdapterAbsolutePath" = "/adapters/queue/amqp/ArmoniK.Core.Adapters.Amqp.dll"
    // }
}


variable "control_plane_env_cm" {
    description = "Environment variables from existing config map to pass to the control plane"
    type        = set(string)
    default     = []
    // Example:
    // [
    //   "amqp-cm"
    // ]
    // 
    // amqp-cm:
    //   Amqp__MaxRetries: 5
    //   Amqp__LinkCredit: 2
}

variable "control_plane_env_secret" {
    description = "Environment variables from existing secret to pass to the control plane"
    type        = set(string)
    default     = []
    // Example:
    // [
    //   "amqp-secret"
    // ]
    // 
    // amqp-secret:
    //   Amqp__Host: amqp.svc
    //   Amqp__Scheme: AMQPS
    //   Amqp__AllowHostMismatch: true
}

variable "control_plane_env_from_secret" {
    description = "Environment variables from existing secret to pass to the control plane"
    type        = map(object({
        secret = string
        field  = string
    }))
    default = {}
    // Example:
    // {
    //   "Amqp__User" = {
    //     secret = "amqp-credentials"
    //     field  = "user"
    //   },
    //   "Amqp__Password" = {
    //     secret = "amqp-credentials"
    //     field  = "password"
    //   }
    // }
    //
    // amqp-credentials:
    //   user: dG90bw==
    //   password: dG90bw==
}

variable "control_plane_mount_cm" {
    description = "Volume mount from ConfigMap to pass to the control plane"
    type        = map(object({
        configmap = string
        path      = string
        subpath   = optional(string)
        mode      = optional(string, "644")
        items = optional(map(object({
            mode  = optional(string, "644")
            field = string
        })), {})
    }))
    default = {}
}

variable "control_plane_mount_secret" {
    description = "Volume mount from Secret to pass to the control plane"
    type        = map(object({
        secret  = string
        path    = string
        subpath = optional(string)
        mode    = optional(string, "644")
        items = optional(map(object({
            mode  = optional(string, "644")
            field = string
        })), {})
    }))
    default = {}
    // Example:
    // {
    //   "amqp-certificates" = {
    //     secret  = "amqp-certs"
    //     path    = "/amqp"
    //     subpath = null
    //     mode    = "600"
    //     items = {
    //       "amqp.pem" = {
    //          mode  = "600"
    //          field = "ca.crt"
    //       }
    //     }
    //   }
    // }
    // 
    // amqp-certificates:
    //   ca.crt: BASE64==
    //
    // /amqp
    // └── amqp.pem
}


variable "control_plane_mount_volume" {
    type = ToBeDefined
}
variable "control_plane_mount_volume_claim" {
    type = ToBeDefined
}
```